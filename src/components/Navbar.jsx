const LINKS = [
  { href: "#profile", label: "PLAYER PROFILE" },
  { href: "#roster", label: "ACADEMY HISTORY" },
  { href: "#career", label: "CAREER HISTORY" },
  { href: "#camp", label: "TRAINING GROUND" },
  { href: "#playbook", label: "PLAYBOOK" },
  { href: "#contact", label: "TRANSFER MARKET" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        A. CHANDRA <span>#8</span>
      </div>
      <div className="navbar__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
