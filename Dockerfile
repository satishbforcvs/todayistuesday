ARG fromImage=docker.nexus.aetnadigital.net/cvs-distroless/node:16-distroless
FROM docker.nexus.aetnadigital.net/hccisvc/ssl-support:1.3.0 as ssl-support
FROM $fromImage

COPY --from=ssl-support /app/rds.pem /home/nonroot/app/rds.pem

ARG buildPath=build
ENV buildPath=$buildPath

ENV appPath=/home/nonroot/app
ENV NODE_OPTIONS=--tls-cipher-list='ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384'

ADD $buildPath $appPath

# Start the service
ENTRYPOINT ["node", "dist/index.js"]
HEALTHCHECK NONE


