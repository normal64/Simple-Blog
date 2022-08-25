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
                <Link id='logo-link' href="/">
                    <a >
                <Image 
                className={LayoutStyles.icon}
                width={80}
                height={50}
                src="/blog.png"
                alt="blog icon"
                />
                </a>
                </Link>
                <div  className={LayoutStyles.linkContainer}>
                <Link href="/">
                    <a className={LayoutStyles.navigationLink}>Main</a>
                </Link>
                
                </div>
                
                </header>
                <div className={LayoutStyles.container}>
                    {props.children}
                </div>
                <footer className={LayoutStyles.footer}>
                    2022 &copy; Blog next &nbsp;
                    <p className={LayoutStyles.smallText}>but design like in 1998</p>
                </footer>
          </>  
    )
}

export default Layout
