import { notFound } from 'next/navigation';

export default async function Blogid ({params}) {
    const { id } = await params;
    if (id >=100) {
        return notFound();
    }
    if (!id || isNaN(Number(id))) {
        return <div>Invalid Blog ID</div>;
    }
    return <div>Blog ID Page: {id}</div>;
}   