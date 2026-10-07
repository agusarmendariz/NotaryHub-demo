import { NuevoTestimonio} from "@/components/dashboard/NuevoTestimonio";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NuevaEscrituraPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <NuevoTestimonio />
    </main>
  );
}