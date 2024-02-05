export function Header() {
    return (
        <header className="fixed z-40 top-0 left-0 right-0 bg-opacity-35 backdrop-blur-xl border-b bg-gray-100 font-display tracking-wide flex justify-between p-10 md:flex-row md:justify-between md:p-10">
            <div className="flex items-end">
                <h1 className="text-2xl xl:text-3xl mr-3">
                    <a href="/" className="">Dump</a>
                </h1>
                <p className="text-xs">by @endotaishi_</p>
            </div>
        </header>
    );
}