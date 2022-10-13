
import Head from "next/head"
import Link from "next/link"


export default function PageLayout({ children, title = "Next.js" }) {
    return (
        <>
            <Head>
                <title> {title} </title>
                <meta name="description" content="Aplicación de noticias" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header-principal">
                <div >
                    <Link href={"/"} >inicio</Link>
                </div>
                <div >
                    <Link href={"/nosotros"}>nosotros</Link>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}