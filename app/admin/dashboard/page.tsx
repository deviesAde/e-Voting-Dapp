"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockElections, mockCandidates } from "@/lib/mock-data";
import { BarChart, Activity, Users, Vote } from "lucide-react";
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function AdminDashboard() {
  // Prepare data for the charts
  const votingData = mockCandidates.map(candidate => ({
    name: candidate.name.split(' ')[0], // Just use first name for chart
    votes: candidate.voteCount
  }));
  
  // Calculate total votes
  const totalVotes = mockCandidates.reduce((sum, candidate) => sum + candidate.voteCount, 0);
  
  // Count active elections
  const activeElections = mockElections.filter(election => election.status === 'active').length;
  
  // Count upcoming elections
  const upcomingElections = mockElections.filter(election => election.status === 'upcoming').length;
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
        <Button className="bg-primary hover:bg-primary/90">Tambah Pemilu Baru</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Suara</CardTitle>
            <Vote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVotes}</div>
            <p className="text-xs text-muted-foreground mt-1">
              +{Math.floor(Math.random() * 20) + 10} dalam 24 jam terakhir
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pemilu Aktif</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeElections}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {upcomingElections} akan datang
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kandidat</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockCandidates.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Dari {mockElections.length} pemilu
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tingkat Partisipasi</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.8%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2.5% dari pemilu sebelumnya
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Ringkasan</TabsTrigger>
          <TabsTrigger value="analytics">Analitik</TabsTrigger>
          <TabsTrigger value="reports">Laporan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Perolehan Suara</CardTitle>
              <CardDescription>
                Distribusi suara untuk semua kandidat saat ini.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={votingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="votes" fill="hsl(var(--chart-1))" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Pemilu Aktif & Mendatang</CardTitle>
                <CardDescription>
                  Daftar pemilu yang sedang berlangsung dan yang akan datang.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockElections.map(election => (
                    <div key={election.id} className="flex items-center p-3 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{election.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(election.startDate).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          election.status === 'active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {election.status === 'active' ? 'Aktif' : 'Mendatang'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
                <CardDescription>
                  Aktivitas sistem terbaru.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <p className="text-sm">
                        {[
                          "Pemilih baru terdaftar",
                          "Suara baru tercatat",
                          "Admin mengubah pengaturan",
                          "Kandidat baru ditambahkan",
                          "Pemilu baru dibuat"
                        ][i % 5]}
                      </p>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {Math.floor(Math.random() * 60)} menit yang lalu
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analitik Detail</CardTitle>
              <CardDescription>
                Informasi analitik mendalam tentang pemilu.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fitur analitik detail akan tersedia dalam versi mendatang.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Laporan</CardTitle>
              <CardDescription>
                Laporan pemilu dan hasil pemilihan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fitur laporan akan tersedia dalam versi mendatang.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}