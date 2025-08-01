export default function SpecializedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="specialized-layout">
      {children}
    </div>
  )
}
