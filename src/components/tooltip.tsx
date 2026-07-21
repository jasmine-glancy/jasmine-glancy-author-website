import { TooltipProps } from 'react-bootstrap';
import { Button } from './ui/button';

type ToolTipProps = {
  buttonVariants?: string;
  bookTitle?: string;
  movieOrTvTitle?: string;
  creatorName?: string;
  summaryOnHover?: string;
  styling?: string;
  toolTipStyle?: string;
};

export default function ToolTip({
  buttonVariants,
  bookTitle,
  movieOrTvTitle,
  creatorName,
  summaryOnHover,
  toolTipStyle,
}: ToolTipProps) {
  return (
    <>
      {bookTitle ? (
        // If the toolTipStyle is undefined, provide an empty string as a default
        <div className={`tooltip ${toolTipStyle ?? ''}`} data-tip={summaryOnHover}>
          <Button variant={buttonVariants} size="sm">
            <em>{bookTitle}</em> by {creatorName}
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      {movieOrTvTitle ? (
        <div className={`tooltip ${toolTipStyle ?? ''}`} data-tip={summaryOnHover}>
          <Button variant={buttonVariants} size="sm">
            {movieOrTvTitle} by {creatorName}
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
