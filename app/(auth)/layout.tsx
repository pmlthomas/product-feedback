import "../globals.css";
import Providers from "../providers";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="h-screen w-screen bg-gray-100">
            <body className="h-screen w-screen">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
