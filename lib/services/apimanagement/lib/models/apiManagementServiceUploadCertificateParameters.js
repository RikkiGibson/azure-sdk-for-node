/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Parameters supplied to the Upload SSL certificate for an API Management
 * service operation.
 *
 */
class ApiManagementServiceUploadCertificateParameters {
  /**
   * Create a ApiManagementServiceUploadCertificateParameters.
   * @member {string} type Hostname type. Possible values include: 'Proxy',
   * 'Portal', 'Management', 'Scm'
   * @member {string} certificate Base64 Encoded certificate.
   * @member {string} certificatePassword Certificate password.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiManagementServiceUploadCertificateParameters
   *
   * @returns {object} metadata of ApiManagementServiceUploadCertificateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiManagementServiceUploadCertificateParameters',
      type: {
        name: 'Composite',
        className: 'ApiManagementServiceUploadCertificateParameters',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'Proxy', 'Portal', 'Management', 'Scm' ]
            }
          },
          certificate: {
            required: true,
            serializedName: 'certificate',
            type: {
              name: 'String'
            }
          },
          certificatePassword: {
            required: true,
            serializedName: 'certificate_password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiManagementServiceUploadCertificateParameters;