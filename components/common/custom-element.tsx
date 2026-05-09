type CustomElementProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function CustomElement<T extends React.ElementType = "div">({
  children,
  as,
  ...rest
}: CustomElementProps<T>) {
  const Component = as || "div";
  return <Component {...rest}>{children}</Component>;
}
