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

const models = require('./index');

/**
 * A copy activity Azure Blob source.
 *
 * @extends models['CopySource']
 */
class BlobSource extends models['CopySource'] {
  /**
   * Create a BlobSource.
   * @member {object} [treatEmptyAsNull] Treat empty as null. Type: boolean (or
   * Expression with resultType boolean).
   * @member {object} [skipHeaderLineCount] Number of header lines to skip from
   * each blob. Type: integer (or Expression with resultType integer).
   * @member {object} [recursive] If true, files under the folder path will be
   * read recursively. Default is true. Type: boolean (or Expression with
   * resultType boolean).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BlobSource
   *
   * @returns {object} metadata of BlobSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BlobSource',
      type: {
        name: 'Composite',
        className: 'BlobSource',
        modelProperties: {
          sourceRetryCount: {
            required: false,
            serializedName: 'sourceRetryCount',
            type: {
              name: 'Object'
            }
          },
          sourceRetryWait: {
            required: false,
            serializedName: 'sourceRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          treatEmptyAsNull: {
            required: false,
            serializedName: 'treatEmptyAsNull',
            type: {
              name: 'Object'
            }
          },
          skipHeaderLineCount: {
            required: false,
            serializedName: 'skipHeaderLineCount',
            type: {
              name: 'Object'
            }
          },
          recursive: {
            required: false,
            serializedName: 'recursive',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = BlobSource;