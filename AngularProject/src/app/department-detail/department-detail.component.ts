import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;
  /* public departmentName: string; */

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /* let name = this.route.snapshot.paramMap.get('name');
    this.departmentName = name; */
    /* console.log(typeof name);
    console.log("name :: "+name); */

    //This is a drawback bcz if you click next or previous button that is changing url but view is not changing
    /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id; */
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  showOverView(){
    this.router.navigate(['dept-overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['dept-contact'], {relativeTo: this.route});
  }

}
