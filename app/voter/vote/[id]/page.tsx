"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockElections } from "@/lib/mock-data";
import { Vote, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function VotePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Find the election by ID
  const election = mockElections.find(e => e.id === params.id);
  
  if (!election) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
        <AlertCircle className="h-16 w-16 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-2">Pemilu Tidak Ditemukan</h1>
        <p className="text-muted-foreground mb-6">
          Maaf, pemilu yang Anda cari tidak dapat ditemukan.
        </p>
        <Link href="/voter/dashboard">
          <Button>Kembali ke Dashboard</Button>
        </Link>
      </div>
    );
  }
  
  const handleVote = () => {
    // In a real app, this would send the vote to a blockchain or secure backend
    setIsSuccess(true);
    
    // Redirect to dashboard after a delay
    setTimeout(() => {
      router.push("/voter/dashboard");
    }, 3000);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/voter/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">{election.title}</h1>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border">
        <div className="text-center mb-8">
          <Vote className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Pemilihan Suara</h2>
          <p className="text-muted-foreground">
            Pilih kandidat dengan mengklik kartu kandidat di bawah ini. Suara Anda bersifat rahasia dan aman.
          </p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {election.candidates.map((candidate) => (
            <Card 
              key={candidate.id} 
              className={`
                vote-card cursor-pointer border-2 overflow-hidden
                ${selectedCandidate === candidate.id 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'hover:border-gray-300 dark:hover:border-gray-700'}
              `}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={candidate.image}
                  alt={candidate.name}
                  fill
                  className="object-cover"
                />
                {selectedCandidate === candidate.id && (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-16 w-16 text-primary" />
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-bold text-xl">{candidate.name}</h3>
                <p className="text-muted-foreground">{candidate.party}</p>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">{candidate.description}</p>
              </CardContent>
              <CardFooter>
                <span className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                  {candidate.position}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button 
            className="bg-primary hover:bg-primary/90 w-full md:w-auto"
            size="lg"
            disabled={!selectedCandidate}
            onClick={() => setIsConfirmOpen(true)}
          >
            <Vote className="mr-2 h-5 w-5" />
            Kirim Suara Saya
          </Button>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Konfirmasi Pilihan Anda</DialogTitle>
            <DialogDescription>
              Setelah dikonfirmasi, suara Anda tidak dapat diubah.
            </DialogDescription>
          </DialogHeader>
          
          {selectedCandidate && (
            <div className="py-4">
              <p className="mb-4 text-center">
                Anda akan memberikan suara untuk:
              </p>
              
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={election.candidates.find(c => c.id === selectedCandidate)?.image || ""}
                    alt="Candidate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">
                    {election.candidates.find(c => c.id === selectedCandidate)?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {election.candidates.find(c => c.id === selectedCandidate)?.party}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter className="flex sm:justify-between">
            <Button
              variant="outline"
              onClick={() => setIsConfirmOpen(false)}
            >
              Batalkan
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={handleVote}
            >
              Konfirmasi & Kirim
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Success Dialog */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-md">
          <div className="py-6 flex flex-col items-center justify-center">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-700 dark:text-green-300 vote-animation" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Suara Berhasil Dikirim!</h3>
            <p className="text-center text-muted-foreground mb-6">
              Terima kasih telah berpartisipasi dalam pemilihan ini. Suara Anda telah tercatat dengan aman.
            </p>
            <p className="text-xs text-muted-foreground">
              ID Transaksi: {Math.random().toString(36).substring(2, 15)}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}