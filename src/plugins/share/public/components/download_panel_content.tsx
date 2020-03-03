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

import React, { Component } from 'react';

import { EuiButton, EuiFlexItem } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage, I18nProvider } from '@kbn/i18n/react';
import { CoreStart } from 'kibana/public';

interface Props {
  post: any;
  format: string;
  notifications: CoreStart['notifications'];
}

// interface DownloadButtonAppDeps {
//   notifications: CoreStart['notifications'];
//   http: CoreStart['http'];
// }
//
// export const DownloadButtonApp = ({
//   notifications,
//   http,
// }: DownloadButtonAppDeps) => {
//   const downloadHandler = () => {
//     const data = {
//       name: 'Kim',
//     };
//
//     http
//       .post('/api/download_button/download', {
//         body: JSON.stringify({
//           name: 'kim',
//         }),
//       })
//       .then(res => {
//         console.log(res.re);
//         // Use the core notifications service to display a success message.
//         notifications.toasts.addSuccess(
//           i18n.translate('downloadButton.dataUpdated', {
//             defaultMessage: 'Generating pdf...',
//           })
//         );
//       });
//   };
//
//   return (
//     <div>
//       <I18nProvider>
//         <EuiFlexItem grow={false}>
//           <EuiButton type="primary" size="s" onClick={downloadHandler}>
//             <FormattedMessage id="downloadButton.buttonText" defaultMessage="Download" />
//           </EuiButton>
//         </EuiFlexItem>
//       </I18nProvider>
//     </div>
//   );
// };

export class DownloadUi extends Component<Props> {
  downloadHandler = () => {
    const data = window.location.href;
    this.props
      .post('/api/download_button/download', {
        body: JSON.stringify({
          url: data,
        }),
      })
      .then(res => {
        console.log(res.url);
        // Use the core notifications service to display a success message.
        this.props.notifications.toasts.addSuccess(
          i18n.translate('downloadButton.dataUpdated', {
            defaultMessage: 'Generating pdf...',
          })
        );
      });
  };

  public render() {
    return (
      <div>
        <I18nProvider>
          <EuiFlexItem grow={false}>
            <EuiButton type="primary" size="s" onClick={this.downloadHandler}>
              <FormattedMessage id="downloadButton.buttonText" defaultMessage="Download" />
            </EuiButton>
          </EuiFlexItem>
        </I18nProvider>
      </div>
    );
  }
}
