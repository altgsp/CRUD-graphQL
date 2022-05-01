/**
 * @generated SignedSource<<99a0290823aeb8360f0008369188b5ca>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {||};
export type AppQuery$data = {|
  +notes: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +content: ?string,
  |}>,
|};
export type AppQuery = {|
  variables: AppQuery$variables,
  response: AppQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "notes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "898fa45cd52fc575a5f8784e94a5a190",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  notes {\n    _id\n    content\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "f49ea50a81661eb7e7cd272cbfb88f4d";

module.exports = ((node/*: any*/)/*: Query<
  AppQuery$variables,
  AppQuery$data,
>*/);
