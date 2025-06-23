import {Card} from "@/components/ui/card.tsx";

export function NotFound() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-52">
            <Card>
                <div className="flex flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600">The page you are looking for does not exist.</p>
                </div>
            </Card>
        </div>
    );
}
