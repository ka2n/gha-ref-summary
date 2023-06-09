# GitHub Action Variable Cheat Sheet

| variable                          	| `push`          	| `pull_request`    	| `workflow_dispatch` 	|
|-----------------------------------	|-----------------	|-------------------	|---------------------	|
| `github.ref`                      	| refs/heads/main 	| refs/pull/1/merge 	| refs/heads/main     	|
| `github.head_ref`                 	|                 	| topic-1           	|                     	|
| `github.base_ref`                 	|                 	| main              	|                     	|
| `github.head_ref \|\| github.ref` 	| refs/heads/main 	| topic-1           	| refs/heads/main     	|
