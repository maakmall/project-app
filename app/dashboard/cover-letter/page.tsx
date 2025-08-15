"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const documentOptions = [
  "Curriculum Vitae",
  "Portfolio https://maakmal.github.io",
  "Ijazah",
  "Transkrip Nilai",
  "Sertifikat",
];

export default function Page() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [source, setSource] = useState("");
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const toggleDoc = (doc: string) => {
    if (selectedDocs.includes(doc)) {
      setSelectedDocs(selectedDocs.filter((d) => d !== doc));
    } else {
      setSelectedDocs([...selectedDocs, doc]);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content: string = `Kepada Yth,
Kepala Bagian HRD
${company || " . . . "}

Dengan hormat,
Sehubungan dengan informasi mengenai lowongan pekerjaan ${
    position || " . . . "
} yang saya baca di ${
source || " . . . "
}, maka saya yang bertanda tangan di bawah ini :

Nama : Muhammad Akmal
Tempat/Tgl Lahir : Serang, 20 November 2001
Jenis Kelamin : Laki - laki
Pendidikan : S1 Teknik Informatika
Kewarganegaraan : Indonesia
Agama : Islam
Nomor Telepon : 083893070393
Alamat : Jalan Kp. Terate RT. 08/02, Kec. Kramatwatu, Serang, Banten 42161

Dengan ini bermaksud mengajukan lamaran pekerjaan di ${
    company || " . . . "
} dengan posisi sebagai ${
position || " . . . "
}. Saya telah membaca semua kualifikasi dan saya optimis bahwa saya adalah orang yang tepat untuk posisi ini. Untuk itu, sebagai bahan pertimbangan Bapak/Ibu HRD, bersama surat lamaran pekerjaan ini saya turut melampirkan :

${selectedDocs.map((d) => `- ${d}`).join("\n") || " . . . "}

Besar harapan saya Bapak/Ibu bisa memberikan saya kesempatan wawancara, sehingga saya bisa menjelaskan lebih lanjut mengenai potensi diri dan kemampuan yang saya miliki. Demikian surat lamaran pekerjaan ini saya sampaikan, atas perhatiannya saya ucapkan terima kasih. Semoga ${
    company || " . . . "
} selalu sukses dan sejahtera.


Hormat Saya,

Muhammad Akmal`;

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-4 gap-6">
          {/* Form Input */}
          <Card>
            <CardHeader>
              <CardTitle>Cover Letter Generator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="mb-2">Company Name</Label>
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="PT Lotte Innovate Indonesia"
                />
              </div>

              <div>
                <Label className="mb-2">Position</Label>
                <Input
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Server Engineer"
                />
              </div>

              <div>
                <Label className="mb-2">Information Source</Label>
                <Input
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Website lokercilegon.com"
                />
              </div>

              <div>
                <Label className="mb-2">Document Attachment</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {selectedDocs.length > 0
                        ? `${selectedDocs.length} document selected`
                        : "Choose Document"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0">
                    <Command>
                      <CommandInput placeholder="Search Document" />
                      <CommandEmpty>Document not found</CommandEmpty>
                      <CommandGroup>
                        {documentOptions.map((doc) => (
                          <CommandItem
                            key={doc}
                            onSelect={() => toggleDoc(doc)}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedDocs.includes(doc)
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {doc}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Preview</CardTitle>
              <Button
                className="cursor-pointer"
                size="sm"
                variant="outline"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.replace(/\n/g, "<br />"),
                }}
              />
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
