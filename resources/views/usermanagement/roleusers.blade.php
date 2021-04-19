@extends('layouts.master')
@section('menu')
@include('sidebar.usermanagement')
<style>
    /* close icon */
    .close:focus, .close:hover {
        color: rgb(255, 0, 0) ;
        text-decoration: none;
        opacity: .75;
        outline: none !important;
    }
    .close {
        font-size: 45px !important;
        margin-top: 5px !important;
    }
</style>
<div class="pcoded-content">
    <div class="pcoded-inner-content">
        <!-- Main-body start -->
        <div class="main-body">
            <div class="page-wrapper">
                <!-- Page-header start -->
                <div class="page-header">
                    <div class="row align-items-end">
                        <div class="col-lg-8">
                            <div class="page-header-title">
                                <div class="d-inline">
                                    <h4>User Login</h4>
                                    <span>User Management edit</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="page-header-breadcrumb">
                                <ul class="breadcrumb-title">
                                    <li class="breadcrumb-item">
                                        <a href="{{ route('home') }}"> <i class="feather icon-home"></i> </a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#!">Users</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#!">User Role</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Page-header end -->

                <!-- Page-body start -->
                <div class="page-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <!-- Zero config.table start -->
                            <div class="card">
                                <div class="card-header">
                                    <h5>User Manamegent</h5>
                                    <span>User management list.</span>

                                </div>
                                <div class="card-block">
                                    <div class="dt-responsive table-responsive">
                                        <table id="simpletable" class="table table-striped table-bordered nowrap">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Full Name</th>
                                                    <th>Email Address</th>
                                                    <th>Phone Number</th>
                                                    <th>Status</th>
                                                    <th>Role Name</th>
                                                    <th>Modify</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($data as $item)
                                                    <tr>
                                                        <td class="id">{{ $item->id }}</td>
                                                        <td class="name">{{ $item->name }}</td>
                                                        <td class="email">{{ $item->email }}</td>
                                                        <td class="phone_number">{{ $item->phone_number }}</td>
                                                        @if($item->status =='Active')
                                                        <td class="status"><a href="javascript:void(0)" class="badge badge-pill badge-success">{{ $item->status }}</a></td>
                                                        @endif
                                                        @if($item->status =='Disable')
                                                        <td class="status"><a href="javascript:void(0)" class="badge badge-pill badge-danger">{{ $item->status }}</a></td>
                                                        @endif
                                                        @if($item->status ==null)
                                                        <td class="status"><a href="javascript:void(0)" class="badge badge-pill badge-danger">{{ $item->status }}</a></td>
                                                        @endif
                                                        @if($item->role_name =='Admin')
                                                        <td class="role_name"><a href="javascript:void(0)" class="badge badge-pill badge-success">{{ $item->role_name }}</a></td>
                                                        @endif
                                                        @if($item->role_name =='Normal User')
                                                        <td class="role_name"><a href="javascript:void(0)" class="badge badge-pill badge-secondary">{{ $item->role_name }}</a></td>
                                                        @endif
                                                        @if($item->role_name =='')
                                                        <td class="role_name"><a href="javascript:void(0)" class="badge badge-pill badge-default">{{'[N/A]'}}</a></td>
                                                        @endif
                                                        <td class="text-center">
                                                            <a class="m-r-15 text-muted userView" data-toggle="modal" data-id="'.$item->id.'" data-target="#UserView">
                                                                <i class="fa fa-eye" style="color: #0ecf48;"></i>
                                                            </a>  
                                                            <a class="m-r-15 text-muted userUpdate" data-toggle="modal" data-id="'.$item->id.'" data-target="#UserUpdate">
                                                                <i class="fa fa-edit" style="color: #2196f3;"></i>
                                                            </a>
                                                            <a href="{{ url('role/delete/'.$item->id) }}" onclick="return confirm('Are you sure to want to delete it?')"><i class="fa fa-trash" style="color: red;"></i></a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Full Name</th>
                                                    <th>Email Address</th>
                                                    <th>Phone Number</th>
                                                    <th>Status</th>
                                                    <th>Role Name</th>
                                                    <th>Modify</th>
                                                   
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- Zero config.table end -->
                        </div>
                    </div>
                </div>
                <!-- Page-body end -->
            </div>
        </div>
    </div>
</div>
<!-- Modal View-->
<div class="modal fade" id="UserView" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">View Detial</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="registration" action="" method = "post"><!-- form add -->
                    {{ csrf_field() }}
                    <input type="hidden" class="form-control" id="v_id" name="id" value=""/>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Full Name</label>
                            <div class="col-sm-9">
                                <input type="text" id="v_name"name="name" class="form-control" value=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Email Address</label>
                            <div class="col-sm-9">
                                <input type="text" id="v_email"name="email" class="form-control" value=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Phone Number</label>
                            <div class="col-sm-9">
                                <input type="tel" id="v_phone_number"name="mobile" class="form-control" value=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Status</label>
                            <div class="col-sm-9">
                                <input type="text" id="v_status"name="status" class="form-control" value=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Role Name</label>
                            <div class="col-sm-9">
                                <input type="text" id="v_role_name"name="role_name" class="form-control" value=""/>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- form add end -->
            </div>
            <div class="modal-footer">
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="icofont icofont-eye-alt"></i>Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Modal View-->

<!-- Modal Update-->
<div class="modal fade" id="UserUpdate" tabindex="-1" aria-labelledby="update" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="update">Update</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="registration" action="{{ route('role/user/update') }}" method = "post"><!-- form add -->
                {{ csrf_field() }}
                <div class="modal-body">
               
                    <input type="hidden" class="form-control" id="e_id" name="id" value=""/>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Full Name</label>
                            <div class="col-sm-9">
                                <input type="text" id="e_name" name="name" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Email Address</label>
                            <div class="col-sm-9">
                                <input type="text" id="e_email" name="email" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Phone Number</label>
                            <div class="col-sm-9">
                                <input type="tel" id="e_phone_number" name="phone_number" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Status</label>
                            <div class="col-sm-9">
                                <select class="form-control" id="v_status" name="status">
                                    <option value="Active">Active</option>
                                    <option value="Disable">Disable</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Role Name</label>
                            <div class="col-sm-9">
                                <input type="text" id="e_role_name" name="role_name" class="form-control" value="" />
                            </div>
                        </div>
                    </div>
                    <!-- form add end -->
                </div>
                <div class="modal-footer">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="icofont icofont-eye-alt"></i>Close</button>
                        <button type="submit" id=""name="" class="btn btn-success  waves-light"><i class="icofont icofont-check-circled"></i>Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Modal Update-->
@section('script')
{{-- view js --}}
<script>
    $(document).on('click','.userView',function()
    {
        var _this = $(this).parents('tr');
        $('#v_id').val(_this.find('.id').text());
        $('#v_name').val(_this.find('.name').text());
        $('#v_email').val(_this.find('.email').text());
        $('#v_phone_number').val(_this.find('.phone_number').text());
        $('#v_status').val(_this.find('.status').text());
        $('#v_role_name').val(_this.find('.role_name').text());
    });
</script>
{{-- update js --}}
<script>
    $(document).on('click','.userUpdate',function()
    {
        var _this = $(this).parents('tr');
        $('#e_id').val(_this.find('.id').text());
        $('#e_name').val(_this.find('.name').text());
        $('#e_email').val(_this.find('.email').text());
        $('#e_phone_number').val(_this.find('.phone_number').text());
        $('#e_status').val(_this.find('.status').text());
        $('#e_role_name').val(_this.find('.role_name').text());
    });
</script>
@endsection
@endsection