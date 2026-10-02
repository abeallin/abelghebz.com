export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
