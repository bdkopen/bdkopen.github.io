import classNames from "classnames";
import clsx from "clsx";

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
// Display it's children in a column.
const SectionRow = (props) => {

    return (
        <div 
            className={
                clsx(
                    `flex flex-row flex-[1_1_fit-content] min-h-fit overflow-auto`,
                    props.className,
                    /* `flex flex-row flex-initial overflow-auto`, */
                )
            }
        >
            {props.children}
        </div>
    );
}

// Display it's children in a column.
const SectionColumn = (props) => {

    return (
        <div 
            className={
                clsx(
                    `flex flex-col flex-[1_1_fit-content] min-h-fit overflow-auto`,   
                    props.className,
                    /* `flex flex-col flex-initial overflow-auto`,  */
                )
            }
        >
            {props.children}
        </div>
    );
}

export {
    Section,
    SectionRow,
    SectionColumn
};