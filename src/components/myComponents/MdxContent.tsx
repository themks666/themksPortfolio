import {highlight} from "sugar-high"
import {JSX} from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

const Code = ({children, ...props}: any)=>{
    const highlightedCode = highlight(children)
    return <code  dangerouslySetInnerHTML={{__html: highlightedCode}} {...props}></code>
}
const CustomComponent = {
    code:Code
}
const MdxContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return <MDXRemote {...props} components={{...CustomComponent, ...(props.components || {})}} />;

};

export default MdxContent;
