

const DynamicPage = async({params}:{params:Promise<{blogId:string}>; }) => {
    console.log(await params)

    const {blogId} = await params;
    return (
        <div>
            <h1>DynamicPagepag blog page blogid:{blogId} </h1>
        </div>
    );
};

export default DynamicPage;