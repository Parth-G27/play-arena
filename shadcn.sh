#!/bin/bash
# Run shadcn commands with SSL disabled for this project only
NODE_TLS_REJECT_UNAUTHORIZED=0 npx shadcn@latest "$@"