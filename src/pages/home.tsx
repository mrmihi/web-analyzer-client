import HomeForm from '@/components/home';
import ResultDialog from '@/components/result-dialog';

export function Home() {
    return (
        <>
            <div className="flex w-full h-full flex-1 flex-col justify-center items-center p-8 md:p-10 relative">
                <div className="absolute my-0 transform translate-y-11 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-lg" />
                <div className="w-full z-10 justify-center items-center flex flex-col gap-8">
                    <HomeForm />
                </div>
            </div>
            <ResultDialog />
        </>
    );
}
