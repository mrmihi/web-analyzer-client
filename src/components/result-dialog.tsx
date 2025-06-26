import { Dialog } from "@/components/ui/dialog";
import type {AnalysisResponse} from "@/services/api";

interface ResultDialogProps {
  open: boolean;
  onClose: () => void;
  data: AnalysisResponse | null;
}

export default function ResultDialog({ open, onClose, data }: ResultDialogProps) {
  if (!data) return null;

  return (
    <Dialog open={open} onClose={onClose} title="Website Analysis Results">
      <div className="space-y-4">
        <div className="rounded-md bg-gray-50 p-3">
          <h3 className="font-medium">Basic Information</h3>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500">HTML Version:</div>
            <div>{data.html_version}</div>
            <div className="text-gray-500">Page Title:</div>
            <div>{data.title}</div>
            <div className="text-gray-500">Login Form:</div>
            <div>{data.login_form ? "Yes" : "No"}</div>
          </div>
        </div>

        <div className="rounded-md bg-gray-50 p-3">
          <h3 className="font-medium">Heading Counts</h3>
          <div className="mt-2 grid grid-cols-6 gap-2 text-sm">
            {Object.entries(data.headings).map(([heading, count]) => (
              <div key={heading} className="flex flex-col items-center">
                <div className="font-medium">{heading.toUpperCase()}</div>
                <div>{count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md bg-gray-50 p-3">
          <h3 className="font-medium">Link Analysis</h3>
          <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Internal</div>
              <div className="text-lg font-medium">{data.internal_links}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">External</div>
              <div className="text-lg font-medium">{data.external_links}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500">Inaccessible</div>
              <div className="text-lg font-medium">{data.inaccessible_links}</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
