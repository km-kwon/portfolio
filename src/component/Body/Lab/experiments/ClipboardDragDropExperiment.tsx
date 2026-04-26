import React, { useState, useRef, useCallback } from "react";

interface FileEntry {
  name: string;
  size: string;
  type: string;
  preview?: string;
}

const formatSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const ClipboardDragDropExperiment: React.FC = () => {
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMethod, setLastMethod] = useState<"paste" | "drop" | null>(null);
  const [pasteCount, setPasteCount] = useState(0);
  const [dropCount, setDropCount] = useState(0);
  const dropRef = useRef<HTMLDivElement>(null);

  const processFiles = useCallback(
    (fileList: FileList | File[], method: "paste" | "drop") => {
      const entries: FileEntry[] = [];

      Array.from(fileList).forEach((file) => {
        const entry: FileEntry = {
          name: file.name || "clipboard-image",
          size: formatSize(file.size),
          type: file.type || "unknown",
        };

        if (file.type.startsWith("image/")) {
          const url = URL.createObjectURL(file);
          entry.preview = url;
        }

        entries.push(entry);
      });

      setFiles((prev) => [...entries, ...prev].slice(0, 10));
      setLastMethod(method);

      if (method === "paste") setPasteCount((c) => c + 1);
      else setDropCount((c) => c + 1);
    },
    []
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const items = e.clipboardData.items;
      const pastedFiles: File[] = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].kind === "file") {
          const file = items[i].getAsFile();
          if (file) pastedFiles.push(file);
        }
      }

      if (pastedFiles.length > 0) {
        e.preventDefault();
        processFiles(pastedFiles, "paste");
      }
    },
    [processFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropRef.current && !dropRef.current.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files, "drop");
      }
    },
    [processFiles]
  );

  const reset = () => {
    files.forEach((f) => {
      if (f.preview) URL.revokeObjectURL(f.preview);
    });
    setFiles([]);
    setLastMethod(null);
    setPasteCount(0);
    setDropCount(0);
  };

  return (
    <div className="grid items-start gap-5 md:grid-cols-2">
      {/* Controls */}
      <div>
        <p className="text-[13px] text-fg-muted leading-[1.7] mb-4">
          <strong>Ctrl+V</strong>로 클립보드 이미지를 붙여넣거나,
          파일을 <strong>드래그 & 드롭</strong>하세요.
          DataTransfer API가 어떻게 동작하는지 확인할 수 있습니다.
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex gap-3">
            <div className="flex-1 px-3 py-2 rounded-lg border border-(--border-subtle) bg-(--bg-soft) text-center">
              <div className="text-[10px] text-fg-dimmed">Paste 횟수</div>
              <div className="text-[16px] font-semibold text-blue-400">{pasteCount}</div>
            </div>
            <div className="flex-1 px-3 py-2 rounded-lg border border-(--border-subtle) bg-(--bg-soft) text-center">
              <div className="text-[10px] text-fg-dimmed">Drop 횟수</div>
              <div className="text-[16px] font-semibold text-(--accent)">{dropCount}</div>
            </div>
          </div>

          {lastMethod && (
            <div className="text-[11px] text-fg-muted text-center">
              마지막 입력: <span className={lastMethod === "paste" ? "text-blue-400" : "text-(--accent)"}>{lastMethod === "paste" ? "Clipboard Paste" : "Drag & Drop"}</span>
            </div>
          )}
        </div>

        <button
          onClick={reset}
          className="w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer"
        >
          초기화
        </button>
      </div>

      {/* Drop zone + file list */}
      <div className="relative flex flex-col rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden" style={{ minHeight: 280 }}>
        {/* Drop zone */}
        <div
          ref={dropRef}
          onPaste={handlePaste}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          tabIndex={0}
          className={
            "flex-1 flex flex-col items-center justify-center p-6 outline-none transition-all duration-200 cursor-pointer min-h-32 " +
            (isDragging
              ? "bg-(--accent-subtle) border-b-2 border-(--accent)"
              : "border-b border-(--border-subtle) hover:bg-(--bg-soft)")
          }
        >
          <svg className="w-8 h-8 text-fg-dimmed mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="text-[12px] text-fg-muted">
            {isDragging ? "여기에 놓으세요!" : "파일을 드래그하거나 Ctrl+V로 붙여넣기"}
          </span>
          <span className="text-[10px] text-fg-dimmed mt-1">
            이미지 파일은 미리보기를 지원합니다
          </span>
        </div>

        {/* File list */}
        <div className="max-h-36 overflow-y-auto">
          {files.length === 0 ? (
            <div className="px-4 py-3 text-[11px] text-fg-dimmed text-center">
              아직 파일이 없습니다
            </div>
          ) : (
            files.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 border-b border-(--border-subtle)/30 last:border-0"
              >
                {f.preview ? (
                  <img src={f.preview} alt="" className="w-8 h-8 rounded object-cover shrink-0" />
                ) : (
                  <div className="w-8 h-8 rounded bg-(--bg-soft) flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-fg-dimmed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-fg-muted truncate">{f.name}</div>
                  <div className="text-[10px] text-fg-dimmed">{f.type} · {f.size}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ClipboardDragDropExperiment;
