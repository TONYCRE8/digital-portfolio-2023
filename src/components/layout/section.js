const Section = ({children, props}) => {
    console.log(props);
    // put each item of the container array into a string
    var container = Object.keys(props.container).map((key) => {
        return props.container[key];
    }).join(' ');
    // put each item of the inner object into a string
    var inner = Object.keys(props.inner).map((key) => {
        return props.inner[key];
    }).join(' ');
    return (
        <section className={"section " + container}>
            <div className={"section-inner " + inner}>
                {children}
            </div>
        </section>
    )
}
export default Section;