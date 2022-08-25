import Head from "next/head"
import Image from "next/image"
import Link from 'next/link'
import LayoutStyles from '../styles/Layout.module.scss'


const Layout = (props) => {
    return (
        <>
            <Head>
               <title>Next blog</title>
               <meta 
            name="description"
            content="description"
            />
            <meta 
            property="denis dev blog"
            content="nice guy to hire"
            />
            </Head>
            <header className={LayoutStyles.header}>
                <Image 
                className={LayoutStyles.icon}
                width={80}
                height={50}
                src="/blog.png"
                alt="blog icon"
                />
                <Link href="/">
                    <a >Main</a>
                </Link>
                
                </header>
                <div className={LayoutStyles.container}>{props.children}</div>
                <footer className={LayoutStyles.footer}>
                    2022 &copy; Blog next
                </footer>
          </>  
    )
}

export default Layout
