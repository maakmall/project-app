import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";

const documentOptions = [
  "Curriculum Vitae",
  "Portfolio https://maakmal.github.io",
  "Ijazah",
  "Transkrip Nilai",
  "Sertifikat",
];

interface FormSectionProps {
  company: string;
  setCompany: (val: string) => void;
  position: string;
  setPosition: (val: string) => void;
  source: string;
  setSource: (val: string) => void;
  selectedDocs: string[];
  toggleDoc: (doc: string) => void;
}

export default function CoverLetterForm({
  company,
  setCompany,
  position,
  setPosition,
  source,
  setSource,
  selectedDocs,
  toggleDoc,
}: FormSectionProps) {
  return (
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
                    <CommandItem key={doc} onSelect={() => toggleDoc(doc)}>
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
  );
}
