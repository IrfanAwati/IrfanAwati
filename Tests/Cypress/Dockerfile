FROM cypress/base:18.14.1 AS buildimage

ARG XRAY_UPLOAD_RESULTS=true
ARG JIRA_USERNAME
ARG JIRA_PASSWORD
ARG EXECUTION_ENV
ARG TEST_TAGS=

COPY . /app
WORKDIR /app

ENV NO_COLOR=1

RUN echo "registry=https://nexus.lisec.internal/repository/npm-web/" > .npmrc
RUN echo "strict-ssl=false" >> .npmrc
RUN echo "color=false" >> .npmrc

RUN ls -la

RUN npm ci
RUN npx cypress run --env JIRA_USERNAME="$JIRA_USERNAME",JIRA_PASSWORD="$JIRA_PASSWORD",XRAY_UPLOAD_RESULTS=$XRAY_UPLOAD_RESULTS,environment=$EXECUTION_ENV,grep="$TEST_TAGS" || echo "There were failing tests!"

RUN npm install -g junit-report-merger
RUN jrm ./output/junit.xml "./output/partial-*.xml"

FROM scratch AS testresult
COPY --from=buildimage /app ./
