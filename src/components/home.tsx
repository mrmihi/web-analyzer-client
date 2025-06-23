import { AnalyzerForm } from "@/components/analyzer-form"

export default function HomeForm() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <AnalyzerForm />
            </div>
        </div>
    )
}