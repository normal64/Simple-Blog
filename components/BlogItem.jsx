import Link from 'next/link'


const BlogItem = (props) => {
    console.log(`props blog item`, props);
    return (
        <div className="blog-item">
            <h5>{props.props.title}</h5>
            <p>
                {props.props.body}
            </p>
            <div className="text-align-right">
            <Link href="blog/[id]" as={`/blog/${props.props.id}`}>
                <a className="">Read</a>
            </Link>
            </div>
            
        </div>
    )
}

export default BlogItem
