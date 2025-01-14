/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React, { FC } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from '@elastic/eui';
import { FeatureCatalogueEntry, FeatureCatalogueSolution } from '../../../';
import { createAppNavigationHandler } from '../app_navigation_handler';
import { SolutionTitle } from './solution_title';

const getDescriptionText = (description: string): JSX.Element => (
  <EuiText size="s" key={`${description}`}>
    <p>{description}</p>
  </EuiText>
);

const addSpacersBetweenElementsReducer = (
  acc: JSX.Element[],
  element: JSX.Element,
  index: number,
  elements: JSX.Element[]
) => {
  acc.push(element);
  if (index < elements.length - 1) {
    acc.push(<EuiSpacer key={`homeSolutionsPanel__UseCaseSpacer${index}`} size="m" />);
  }
  return acc;
};

const getDescriptions = (appDescriptions: string[]) =>
  appDescriptions
    .map(getDescriptionText)
    .reduce<JSX.Element[]>(addSpacersBetweenElementsReducer, []);

interface Props {
  addBasePath: (path: string) => string;
  solution: FeatureCatalogueSolution;
  apps?: FeatureCatalogueEntry[];
}

export const SolutionPanel: FC<Props> = ({ addBasePath, solution, apps = [] }) => (
  <EuiFlexItem
    key={solution.id}
    data-test-subj={`homSolutionPanel homSolutionPanel_${solution.id}`}
    className={`${
      solution.id === 'opensearchDashboards'
        ? 'homSolutions__group homSolutions__group--single'
        : ''
    } homSolutions__item`}
    grow={1}
  >
    <a
      className={`homSolutionPanel homSolutionPanel--${solution.id}`}
      href={addBasePath(solution.path)}
      onClick={createAppNavigationHandler(solution.path)}
    >
      <EuiPanel className="homSolutionPanel__inner" paddingSize="none">
        <EuiFlexGroup gutterSize="none">
          <EuiFlexItem grow={1} className={`homSolutionPanel__header`}>
            <SolutionTitle
              iconType={solution.icon}
              title={solution.title}
              subtitle={solution.subtitle}
            />
          </EuiFlexItem>

          <EuiFlexItem grow={1} className="homSolutionPanel__content">
            {getDescriptions(
              apps.length ? apps.map(({ subtitle = '' }) => subtitle) : solution.appDescriptions
            )}
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </a>
  </EuiFlexItem>
);
