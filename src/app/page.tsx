import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-heading text-4xl font-semibold text-primary">
        Tokens de diseno funcionando
      </h1>
      <p className="max-w-md font-sans text-foreground">
        Este texto usa la fuente Inter. El titulo de arriba usa Sora.
      </p>
      <div className="rounded-lg border border-border bg-surface px-6 py-4">
        Esto es una superficie (surface) con borde (border)
      </div>
      <div className="flex gap-3">
        <Button variant="primary">Ver proyectos</Button>
        <Button variant="secondary">Descargar CV</Button>
        <Button variant="ghost" size="sm">Contacto</Button>
      </div>
    </main>
  );
}