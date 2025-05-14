"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockElections } from "@/lib/mock-data";
import { mockUsers } from "@/lib/auth-utils";
import { CalendarClock, Vote, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function VoterDashboard() {
  // Use the voter user
  const user = mockUsers.find(user => user.role === 'voter');
  
  // Filter active elections
  const activeElections = mockElections.filter(election => election.status === 'active');
  
  // Filter upcoming elections
  const upcomingElections = mockElections.filter(election => election.status === 'upcoming');
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user?.profilePicture} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Selamat datang, {user?.name}</h1>
            <p className="text-muted-foreground">Pemilih ID: {user?.voterId}</p>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full md:w-auto">
          Lihat Pemilu Aktif
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pemilu Aktif</CardTitle>
            <Vote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeElections.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Menunggu suara Anda
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pemilu Mendatang</CardTitle>
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingElections.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Siapkan diri Anda
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suara Diberikan</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">
              Dari 3 pemilu
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pemilu Selesai</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              Lihat hasil
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pemilu Aktif</CardTitle>
            <CardDescription>
              Pemilu yang sedang berlangsung dan membutuhkan suara Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeElections.length > 0 ? (
              <div className="space-y-4">
                {activeElections.map(election => (
                  <div key={election.id} className="flex items-center p-3 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{election.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Berakhir pada: {new Date(election.endDate).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div>
                      <Link href={`/voter/vote/${election.id}`}>
                        <Button className="bg-primary hover:bg-primary/90">
                          Pilih Sekarang
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40">
                <Vote className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Tidak ada pemilu aktif saat ini.</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pemilu Mendatang</CardTitle>
            <CardDescription>
              Pemilu yang akan datang dan perlu Anda persiapkan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingElections.length > 0 ? (
              <div className="space-y-4">
                {upcomingElections.map(election => (
                  <div key={election.id} className="flex items-center p-3 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{election.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Dimulai pada: {new Date(election.startDate).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {election.candidates.length} kandidat
                      </p>
                    </div>
                    <div>
                      <Button variant="outline">
                        Detail
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40">
                <CalendarClock className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Tidak ada pemilu mendatang saat ini.</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Lihat Semua Pemilu
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}