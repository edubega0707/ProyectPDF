

<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_pdfgenerator extends CI_Controller {

    function __construct()
	{
		parent::__construct();
		//$this->load->model('Mpdfgenerator');
	}

	public function index()
	{
		$this->load->view('v_pdfgenerator/header.php');
		$this->load->view('v_pdfgenerator/pdfgenerator.php');
		$this->load->view('v_pdfgenerator/footer.php');
	}
	
}
