import classNames from "classnames";

const Heading = (props) => {

    const alignment = props.alignment || 'text-left';
    const fontSize = props.fontSize || 'text-[48px]';

    const classes = classNames(props.classes, alignment, fontSize, 'w-full');

    return <>
        <h1 className={classes}>
            {props.children}
        </h1>
    </>;
};

export {
    Heading,
};