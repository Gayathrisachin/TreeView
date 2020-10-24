import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  bntStyle: string;
  @Input() treeData: TreeNode[];
constructor(){}
  ngOnInit() {
    this. bntStyle = 'btn-default';
  

  }
  

  toggleChild(node) {
    node.showChildren = !node.showChildren;
    this.bntStyle = 'btn-change';

  }

}
