

export default function Button(
  { children,  
    variant = "primary",
    ...props }: { children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost"; } 
  & React.ButtonHTMLAttributes<HTMLButtonElement>){

  return (
    <button {...props}>
      {children}
    </button>
  )
} 