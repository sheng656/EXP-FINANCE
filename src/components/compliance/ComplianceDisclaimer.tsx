import { AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';
import { useI18n } from '../../lib/i18n-context';
import { COMPLIANCE } from '../../lib/compliance-config';

interface ComplianceDisclaimerProps {
  type?: 'info' | 'warning';
  message?: string;
  showDataExample?: boolean;
  className?: string;
}

export function ComplianceDisclaimer({ 
  type = 'info',
  message,
  showDataExample = false,
  className = ''
}: ComplianceDisclaimerProps) {
  const { locale } = useI18n();

  const displayMessage = message || COMPLIANCE.disclaimers.notAdvice[locale];
  const Icon = type === 'warning' ? AlertTriangle : Info;

  return (
    <Alert className={`border-yellow-200 bg-yellow-50 ${className}`}>
      <Icon className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-sm text-gray-700">
        {displayMessage}
        {showDataExample && (
          <>
            {' '}
            {COMPLIANCE.disclaimers.dataExample[locale]}
          </>
        )}
      </AlertDescription>
    </Alert>
  );
}

export function DataSourceNote({ 
  source, 
  className = '' 
}: { 
  source: string; 
  className?: string;
}) {
  return (
    <p className={`text-xs text-gray-500 italic ${className}`}>
      * {source}
    </p>
  );
}
