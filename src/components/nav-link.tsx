import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const {pathname} = useLocation();

  
    return (
    <Link
    data-current={pathname === props.to}  
    className="gap-1.5 text-muted-foreground flex items-center text-sm font-medium hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
}
