<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table            = 'SEA_USER';
    protected $primaryKey       = 'USR_ID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['USR_NAME', 'USR_EMAIL', 'USR_PASSWORD', 'USR_CPF', 'USR_GENDER', 'USR_ADDRESS_CEP', 'USR_ADDRESS_NUMBER', 'USR_ADDRESS_COMPLEMENT', 'USR_ADDRESS_STREET', 'USR_ADDRESS_NEIGHBORHOOD', 'USR_ADDRESS_CITY', 'USR_ADDRESS_STATE', 'created_at', 'updated_at'];

    protected bool $allowEmptyInserts = false;

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];
}
