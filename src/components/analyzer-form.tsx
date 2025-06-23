import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from "react";
import { analyzeWebsite, type AnalysisResponse } from "@/services/api";
import { useToast } from "@/components/ui/toast";
import ResultDialog from "@/components/result-dialog";

export function AnalyzerForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {
    const [url, setUrl] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [analysisData, setAnalysisData] = React.useState<AnalysisResponse | null>(null);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const { showToast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!url) {
            showToast("Please enter a URL", "error");
            return;
        }

        setLoading(true);

        try {
            const data = await analyzeWebsite(url);
            setAnalysisData(data);
            setDialogOpen(true);
        } catch (error) {
            console.error("Error analyzing website:", error);
            showToast(
                error instanceof Error 
                    ? error.message 
                    : "Failed to analyze website. Please try again.",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Analyze a Website</CardTitle>
                    <CardDescription>
                        Enter a URL to analyze its content.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    type="url"
                                    placeholder="https://example.com"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button 
                                    type="submit" 
                                    className="w-full"
                                    disabled={loading}
                                >
                                    {loading ? "Analyzing..." : "Analyze"}
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <ResultDialog 
                open={dialogOpen} 
                onClose={() => setDialogOpen(false)} 
                data={analysisData} 
            />
        </div>
    )
}
