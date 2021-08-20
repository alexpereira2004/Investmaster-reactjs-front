import React from "react";

class WrapperHeader extends React.Component {
    render() {
        return (
            <div className="header">
                
                <div className="header-holder header-holder-desktop sticky-header" id="sticky-header-desktop">
                    <div className="header-container container-fluid">
                        <div className="header-wrap">
                            
                            <ul className="nav nav-pills">
                                
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link active" data-toggle="dropdown">Apps</a>
                                    <div className="dropdown-menu dropdown-menu-left dropdown-menu-animated">
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-icon">
                                                <i className="fa fa-boxes"></i>
                                            </div>
                                            <span className="dropdown-content">Inventory Manager</span>
                                            <div className="dropdown-addon">
                                                <span className="badge badge-warning badge-pill">20</span>
                                            </div>
                                        </a>
                                        
                                        <div className="dropdown-submenu">
                                            <a href="#" className="dropdown-item">
                                                <div className="dropdown-icon">
                                                    <i className="fa fa-project-diagram"></i>
                                                </div>
                                                <span className="dropdown-content">Project manager</span>
                                                <div className="dropdown-addon">
                                                    <i className="caret"></i>
                                                </div>
                                            </a>
                                            <div className="dropdown-submenu-menu dropdown-submenu-left">
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Create project</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Delete project</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Ongoing project</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Completed project</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Urgent project</span>
                                                </a>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="dropdown-submenu">
                                            <a href="#" className="dropdown-item">
                                                <div className="dropdown-icon">
                                                    <i className="fa fa-tasks"></i>
                                                </div>
                                                <span className="dropdown-content">Task manager</span>
                                                <div className="dropdown-addon">
                                                    <i className="caret"></i>
                                                </div>
                                            </a>
                                            <div className="dropdown-submenu-menu dropdown-submenu-left">
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Show task</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Assign task</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Assign member</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Completed task</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Urgent task</span>
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-icon">
                                                <i className="fa fa-dollar-sign"></i>
                                            </div>
                                            <span className="dropdown-content">Invoice</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="#" className="dropdown-item">
                                            <div className="dropdown-icon">
                                                <i className="fa fa-user-cog" />
                                            </div>
                                            <span className="dropdown-content">My Account</span>
                                        </a>
                                    </div>
                                </li>
                                
                                
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown">Features</a>
                                    <div
                                        className="dropdown-menu dropdown-menu-left dropdown-menu-wide dropdown-menu-animated overflow-hidden">
                                        <div className="dropdown-row">
                                            
                                            <div
                                                className="dropdown-col d-flex flex-column align-items-start justify-content-center bg-primary text-white">
                                                <h2 className="font-weight-bolder">Welcome back!</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                                                    commodi hic qui aspernatur doloremque quos tempora placeat culpa
                                                    illum, voluptatibus delectus provident cumque aliquid enim, laborum
                                                    aliquam. Quod, perferendis unde.</p>
                                                <a href="../../dashboard1/ltr/pages/login/login-1.html"
                                                   className="btn btn-light btn-wider">Login</a>
                                            </div>
                                            
                                            
                                            <div className="dropdown-col">
                                                <h4 className="dropdown-header dropdown-header-lg">Features</h4>
                                                
                                                <div className="grid-nav grid-nav-action">
                                                    <div className="grid-nav-row">
                                                        <a href="#" className="grid-nav-item">
                                                            <div className="grid-nav-icon">
                                                                <i className="far fa-window-restore"></i>
                                                            </div>
                                                            <span className="grid-nav-content">Dashboard</span>
                                                        </a>
                                                        <a href="#" className="grid-nav-item">
                                                            <div className="grid-nav-icon">
                                                                <i className="far fa-clipboard"></i>
                                                            </div>
                                                            <span className="grid-nav-content">TODO List</span>
                                                        </a>
                                                        <a href="#" className="grid-nav-item">
                                                            <div className="grid-nav-icon">
                                                                <i className="far fa-question-circle"></i>
                                                            </div>
                                                            <span className="grid-nav-content">Help Center</span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-nav-row">
                                                        <a href="#" className="grid-nav-item">
                                                            <div className="grid-nav-icon">
                                                                <i className="far fa-images"></i>
                                                            </div>
                                                            <span className="grid-nav-content">Galery</span>
                                                        </a>
                                                        <a href="#" className="grid-nav-item">
                                                            <div className="grid-nav-icon">
                                                                <i className="far fa-chart-bar"></i>
                                                            </div>
                                                            <span className="grid-nav-content">Scrumboard</span>
                                                        </a>
                                                        <a href="#" className="grid-nav-item">
                                                            <div className="grid-nav-icon">
                                                                <i className="far fa-bookmark"></i>
                                                            </div>
                                                            <span className="grid-nav-content">Docs</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                            
                                            <div className="dropdown-col border-left">
                                                <h4 className="dropdown-header dropdown-header-lg">Tools</h4>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Components</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Form Wizard</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Documentation</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Knowledge Base</span>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <i className="dropdown-bullet"></i>
                                                    <span className="dropdown-content">Inventory Manager</span>
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                            
                        </div>

                        <div className="header-wrap header-wrap-block">

                            <div className="input-group-icon input-group-lg widget15-compact">
                                <div className="input-group-prepend">
                                    <i className="fa fa-search text-primary"></i>
                                </div>
                                <input type="text" className="form-control" placeholder="Type to search..." />
                            </div>

                        </div>

                        <div className="header-wrap">

                            <div className="dropdown">
                                <button className="btn btn-label-primary btn-icon" data-toggle="dropdown">
                                    <i className="far fa-bell"></i>
                                    <div className="btn-marker">
                                        <i className="marker marker-dot text-success"></i>
                                    </div>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-right dropdown-menu-wide dropdown-menu-animated overflow-hidden py-0">

                                    <div className="portlet border-0 portlet-scroll">
                                        <div className="portlet-header bg-primary rounded-0">
                                            <div className="portlet-icon text-white">
                                                <i className="far fa-bell"></i>
                                            </div>
                                            <h3 className="portlet-title text-white">Notification</h3>
                                            <div className="portlet-addon">
                                                <span className="badge badge-warning badge-square badge-lg">9+</span>
                                            </div>
                                        </div>
                                        <div className="portlet-body p-0 rounded-0" data-toggle="simplebar">
                                            
                                            <div className="rich-list rich-list-action">
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-info">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-file-invoice"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New report has been
                                                            received</h4>
                                                        <span className="rich-list-subtitle">2 min ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-success">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-shopping-basket"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">Last order was completed</h4>
                                                        <span className="rich-list-subtitle">1 hrs ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-danger">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-users"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">Company meeting canceled</h4>
                                                        <span className="rich-list-subtitle">5 hrs ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-warning">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-paper-plane"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New feedback received</h4>
                                                        <span className="rich-list-subtitle">6 hrs ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-primary">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-download"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New update was availabled</h4>
                                                        <span className="rich-list-subtitle">1 day ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-success">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-asterisk"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">Your password was changed</h4>
                                                        <span className="rich-list-subtitle">2 day ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-info">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-user-plus"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New account has been
                                                            registered</h4>
                                                        <span className="rich-list-subtitle">5 day ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            
                            <div className="dropdown ml-2">
                                <button className="btn btn-label-primary btn-icon" data-toggle="dropdown">
                                    <i className="far fa-comments"></i>
                                    <div className="btn-marker">
                                        <i className="marker marker-dot text-success"></i>
                                    </div>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-right dropdown-menu-wide dropdown-menu-animated overflow-hidden py-0">
                                    
                                    <div className="portlet portlet-scroll border-0">
                                        <div className="portlet-header portlet-header-bordered rounded-0">
                                            
                                            <div className="rich-list-item w-100 p-0">
                                                <div className="rich-list-prepend">
                                                    
                                                    <div className="avatar avatar-circle">
                                                        <div className="avatar-display">
                                                            <img src="../../assets/images/avatar/blank.webp"
                                                                 alt="Avatar image" />
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="rich-list-content">
                                                    <h3 className="rich-list-title">Garrett Winters</h3>
                                                    <span className="rich-list-subtitle">UX Designer</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="portlet-body" data-toggle="simplebar">
                                            
                                            <div className="chat">
                                                <div className="chat-item chat-item-left">
                                                    <div className="chat-content">
                                                        <p className="chat-bubble chat-bubble-primary">Lorem ipsum dolor
                                                            sit amet, consectetur adipisicing elit. Unde, eius.</p>
                                                        <p className="chat-bubble chat-bubble-primary">Lorem ipsum dolor
                                                            sit amet, consectetur adipisicing elit. Unde, eius.</p>
                                                        <span className="chat-time">2 min ago</span>
                                                    </div>
                                                </div>
                                                <div className="chat-item chat-item-right">
                                                    <div className="chat-content">
                                                        <p className="chat-bubble ">Lorem ipsum dolor sit amet,
                                                            consectetur adipisicing elit. Unde, eius.</p>
                                                        <span className="chat-time">1 min ago</span>
                                                    </div>
                                                </div>
                                                <div className="chat-item chat-item-left">
                                                    <div className="chat-content">
                                                        <p className="chat-bubble chat-bubble-primary">Lorem ipsum dolor
                                                            sit amet, consectetur adipisicing elit. Unde, eius.</p>
                                                        <span className="chat-time">2 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="portlet-footer portlet-footer-bordered rounded-0">
                                            
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Type..." />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary btn-icon">
                                                            <i className="fa fa-paper-plane"></i>
                                                        </button>
                                                    </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <button className="btn btn-label-primary btn-icon ml-2" data-toggle="sidemenu"
                                    data-target="#sidemenu-todo">
                                <i className="far fa-calendar-alt"></i>
                            </button>
                            <button className="btn btn-label-primary btn-icon ml-2" data-toggle="sidemenu"
                                    data-target="#sidemenu-settings">
                                <i className="far fa-list-alt"></i>
                            </button>
                            
                            <div className="dropdown ml-2">
                                <button className="btn btn-flat-primary widget13" data-toggle="dropdown">
                                    <div className="widget13-text"> Hi <strong>Brielle</strong>
                                    </div>
                                    
                                    <div className="avatar avatar-info widget13-avatar">
                                        <div className="avatar-display">B</div>
                                    </div>
                                    
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-wide dropdown-menu-right dropdown-menu-animated overflow-hidden py-0">
                                    
                                    <div className="portlet border-0">
                                        <div className="portlet-header bg-primary rounded-0">
                                            
                                            <div className="rich-list-item w-100 p-0">
                                                <div className="rich-list-prepend">
                                                    
                                                    <div className="avatar avatar-circle">
                                                        <div className="avatar-display">
                                                            <img src="../../assets/images/avatar/blank.webp"
                                                                 alt="Avatar image" />
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="rich-list-content">
                                                    <h3 className="rich-list-title text-white">Brielle Williamson</h3>
                                                    <span
                                                        className="rich-list-subtitle text-white">Software Engineer</span>
                                                </div>
                                                <div className="rich-list-append">
                                                    <span
                                                        className="badge badge-warning badge-square badge-lg">9+</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="portlet-body p-0">
                                            
                                            <div
                                                className="grid-nav grid-nav-flush grid-nav-action grid-nav-no-rounded">
                                                <div className="grid-nav-row">
                                                    <a href="#" className="grid-nav-item">
                                                        <div className="grid-nav-icon">
                                                            <i className="far fa-address-card"></i>
                                                        </div>
                                                        <span className="grid-nav-content">Profile</span>
                                                    </a>
                                                    <a href="#" className="grid-nav-item">
                                                        <div className="grid-nav-icon">
                                                            <i className="far fa-comments"></i>
                                                        </div>
                                                        <span className="grid-nav-content">Messages</span>
                                                    </a>
                                                    <a href="#" className="grid-nav-item">
                                                        <div className="grid-nav-icon">
                                                            <i className="far fa-clone"></i>
                                                        </div>
                                                        <span className="grid-nav-content">Activities</span>
                                                    </a>
                                                </div>
                                                <div className="grid-nav-row">
                                                    <a href="#" className="grid-nav-item">
                                                        <div className="grid-nav-icon">
                                                            <i className="far fa-calendar-check"></i>
                                                        </div>
                                                        <span className="grid-nav-content">Tasks</span>
                                                    </a>
                                                    <a href="#" className="grid-nav-item">
                                                        <div className="grid-nav-icon">
                                                            <i className="far fa-sticky-note"></i>
                                                        </div>
                                                        <span className="grid-nav-content">Notes</span>
                                                    </a>
                                                    <a href="#" className="grid-nav-item">
                                                        <div className="grid-nav-icon">
                                                            <i className="far fa-bell"></i>
                                                        </div>
                                                        <span className="grid-nav-content">Notification</span>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="portlet-footer portlet-footer-bordered rounded-0">
                                            <button className="btn btn-label-danger">Sign out</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="header-holder header-holder-desktop">
                    <div className="header-container container-fluid">
                        <h4 className="header-title">Dashboard 1</h4>
                        <i className="header-divider"></i>
                        <div className="header-wrap header-wrap-block justify-content-start">
                            
                            <div className="breadcrumb">
                                <a href="../../dashboard1/ltr/index.html" className="breadcrumb-item">
                                    <div className="breadcrumb-icon">
                                        <i data-feather="home"></i>
                                    </div>
                                    <span className="breadcrumb-text">Dashboard</span>
                                </a>
                            </div>
                            
                        </div>
                        <div className="header-wrap">
                            
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-flat-primary active">
                                    <input type="radio" name="timeOption" id="timeOption1" checked /> Today </label>
                                <label className="btn btn-flat-primary">
                                    <input type="radio" name="timeOption" id="timeOption2" /> Week </label>
                                <label className="btn btn-flat-primary">
                                    <input type="radio" name="timeOption" id="timeOption3" /> Month </label>
                            </div>
                            
                            <button className="btn btn-label-info btn-icon ml-2" id="fullscreen-trigger"
                                    data-toggle="tooltip" title="Toggle fullscreen" data-placement="left">
                                <i className="fa fa-expand fullscreen-icon-expand"></i>
                                <i className="fa fa-compress fullscreen-icon-compress"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="header-holder header-holder-mobile sticky-header" id="sticky-header-mobile">
                    <div className="header-container container-fluid">
                        <div className="header-wrap header-wrap-block justify-content-start">
                            <h4 className="header-brand">Panely</h4>
                        </div>
                        <div className="header-wrap">
                            
                            <div className="dropdown">
                                <button className="btn btn-flat-primary btn-icon" data-toggle="dropdown">
                                    <i className="far fa-bell"></i>
                                    <div className="btn-marker">
                                        <i className="marker marker-dot text-success"></i>
                                    </div>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-right dropdown-menu-wide dropdown-menu-animated overflow-hidden py-0">
                                    
                                    <div className="portlet border-0 portlet-scroll">
                                        <div className="portlet-header bg-primary rounded-0">
                                            <div className="portlet-icon text-white">
                                                <i className="far fa-bell"></i>
                                            </div>
                                            <h3 className="portlet-title text-white">Notification</h3>
                                            <div className="portlet-addon">
                                                <span className="badge badge-warning badge-square badge-lg">9+</span>
                                            </div>
                                        </div>
                                        <div className="portlet-body p-0 rounded-0" data-toggle="simplebar">
                                            
                                            <div className="rich-list rich-list-action">
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-info">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-file-invoice"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New report has been
                                                            received</h4>
                                                        <span className="rich-list-subtitle">2 min ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-success">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-shopping-basket"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">Last order was completed</h4>
                                                        <span className="rich-list-subtitle">1 hrs ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-danger">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-users"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">Company meeting canceled</h4>
                                                        <span className="rich-list-subtitle">5 hrs ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-warning">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-paper-plane"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New feedback received</h4>
                                                        <span className="rich-list-subtitle">6 hrs ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-primary">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-download"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New update was availabled</h4>
                                                        <span className="rich-list-subtitle">1 day ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-success">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-asterisk"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">Your password was changed</h4>
                                                        <span className="rich-list-subtitle">2 day ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="rich-list-item">
                                                    <div className="rich-list-prepend">
                                                        
                                                        <div className="avatar avatar-label-info">
                                                            <div className="avatar-display">
                                                                <i className="fa fa-user-plus"></i>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="rich-list-content">
                                                        <h4 className="rich-list-title">New account has been
                                                            registered</h4>
                                                        <span className="rich-list-subtitle">5 day ago</span>
                                                    </div>
                                                    <div className="rich-list-append">
                                                        <i className="caret mx-2"></i>
                                                    </div>
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <button className="btn btn-flat-primary btn-icon ml-2" data-toggle="sidemenu"
                                    data-target="#sidemenu-todo">
                                <i className="far fa-calendar-alt"></i>
                            </button>
                            <button className="btn btn-flat-primary btn-icon ml-2" data-toggle="aside">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="header-holder header-holder-mobile">
                    <div className="header-container container-fluid">
                        <div className="header-wrap header-wrap-block justify-content-start w-100">
                            <div className="breadcrumb">
                                <a href="../../dashboard1/ltr/index.html" className="breadcrumb-item">
                                    <div className="breadcrumb-icon">
                                        <i data-feather="home"></i>
                                    </div>
                                    <span className="breadcrumb-text">Dashboard</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WrapperHeader