#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkGuideCodepipelineExampleStack } from '../lib/cdk-guide-codepipeline-example-stack';

const app = new cdk.App();
new CdkGuideCodepipelineExampleStack(app, 'CdkGuideCodepipelineExampleStack');
