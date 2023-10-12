"use client"
import MarkdownPreview from "@uiw/react-markdown-preview"

const DescPreview = ({ text }: { text: string }) => {
  return <MarkdownPreview source={text} />
}

export default DescPreview
