import classNames from "classnames";

const Section = (props) => {

    const height = props.height || 'h-full';
    const width = props.width || 'w-full';

    let contentDirection = '';
    if(props.contentDirection === "vertical") {
        contentDirection = 'flex-col';
    } else if(props.contentDirection === "horizontal") {
        contentDirection = 'flex-row';
    }

    const classes = classNames(props.classes, 'flex items-center', contentDirection, height, width);

    return <>
        <div className={classes}>
            {props.children}
        </div>
    </>;
}

export {
    Section,
};