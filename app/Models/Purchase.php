<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PharIo\Manifest\License;

class Purchase extends Model
{
    use HasFactory;
    protected $fillable = [
        'customerName', 'offeringID', 'quantity'
    ];

    public static function getTableName() {
        return (new self)->getTable();
    }

    public function offering() {
        return $this->belongsTo(Offering::class, "offeringID");
    }
}
