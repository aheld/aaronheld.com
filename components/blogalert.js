import cn from 'classnames'
import { Alert, AlertTitle } from '@material-ui/lab';

import { Typography } from '@material-ui/core'


export default function BlogAlert({ preview }) {
  return (
    <Alert severity="warning">
          {preview ? ( <Typography>
              This page is a preview.
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>
              to exit preview mode.
            </Typography>
          ) : (<Typography>
              Emergency port from wordpress, The source code for this "Work In Progress" blog is{' '}
              <a
                href={`https://github.com/aheld/aaronheld.com`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
              </Typography>
          )}
        </Alert>
  )
}
