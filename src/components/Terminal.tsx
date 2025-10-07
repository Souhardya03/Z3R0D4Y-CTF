import { useEffect, useState, useMemo } from "react";

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const terminalLines = useMemo(() => [
    "$ whoami",
    "",
    "> Z3R0_LOGON - The cyber security club of JGEC",
    "",
    "$ cat about.txt",
    "> Zero_logon is established in 2022, in the guidance of Syed Modassir Ali, Red Team Security Engineer @solarwinds",
    "> We are a community of cybersecurity enthusiasts",
    "> Passionate about hacking, CTFs, and security research",
    "> Our mission: Learn, Hack, Compete, Win!",
    "",
    "$ ls -la skills/",
    "> Web Exploitation",
    "> Binary Exploitation",
    "> Reverse Engineering", 
    "> Cryptography",
    "> Forensics",
    "",
    "$ echo $MOTTO",
    "> 'Fear the code, embrace the chaos'",
    "",
    "$ _",
  ], []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setLines((prev) => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [terminalLines]);

  return (
    <div className="bg-black/90 border border-primary/50 rounded-lg p-6 font-mono text-sm shadow-[0_0_30px_rgba(255,115,0,0.3)] transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${
              line?.startsWith("$")
                ? "text-primary"
                : line?.startsWith(">")
                ? "text-green-400"
                : "text-muted-foreground"
            } animate-fade-in`}
          >
            {line || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;